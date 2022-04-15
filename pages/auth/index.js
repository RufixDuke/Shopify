import Head from 'next/head';
import Input from '../../components/Input/Input';
import { useState } from 'react'
import Button from '../../components/Button/Button';

function Authentication() {
    const initialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    };
    const [isSignup, setIsSignUp] = useState(true)
    const [controls, setControls] = useState(
        {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    )

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
        return {
            type: actionTypes.AUTH_LOGOUT
        };
    };

    const checkAuthTimeout = (expirationTime) => {
        return dispatch => {
            setTimeout(() => {
                logout();
            }, expirationTime * 1000);
        };
    };

    const authFail = (state, action) => {
        return updateObject(state, {
            error: action.error,
            loading: false
        });
    };

    const authStart = (state, action) => {
        return updateObject(state, { error: null, loading: true });
    };

    const authSuccess = (state, action) => {
        return updateObject(state, {
            token: action.idToken,
            userId: action.userId,
            error: null,
            loading: false
        });
    };

    const auth = (email, password, isSignup) => {
        return dispatch => {
            dispatch(authStart());
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };
            let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
            if (!isSignup) {
                url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
            }
            axios.post(url, authData)
                .then(response => {
                    console.log(response);
                    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token', response.data.idToken);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userId', response.data.localId);
                    dispatch(authSuccess(response.data.idToken, response.data.localId));
                    dispatch(checkAuthTimeout(response.data.expiresIn));
                })
                .catch(err => {
                    dispatch(authFail(err.response.data.error));
                });
        };
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        auth(controls.email.value, controls.password.value, isSignup);
    }

    // const inputHandler = (e) => {
    //     setInput(e.target.value)
    // }

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...controls,
            [controlName]: {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            }
        };
        setControls({ controls: updatedControls });
    }

    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)} />
    ));

    const switchAuthModeHandler = () => {
        setIsSignUp(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }



    return (
        <>
            <Head>
                <title>Shopify</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className=''>
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>

                <Button
                    clicked={switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}
                </Button>
            </div>
        </>
    )
}

export default Authentication;