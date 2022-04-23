import Head from 'next/head';
import Input from '../../components/Input/Input';
import { useState } from 'react'
import Button from '../../components/Button/Button';
import { updateObject } from '../../components/utility';
import classes from '../../styles/Auth.module.css'
import axios from 'axios'

import Link from 'next/link'

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
                validation: {
                    required: true,
                    isEmail: true
                },
                value: '',
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                validation: {
                    required: true,
                    minLength: 6
                },
                value: '',
                valid: false,
                touched: false
            }
        }
    )

    const authLogout = (initialState, action) => {
        return updateObject(initialState, { token: null, userId: null });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
        return authLogout(initialState, action)
    };

    const checkAuthTimeout = (expirationTime) => {
        return (() =>
            setTimeout(() => {
                logout();
            }, expirationTime * 1000)
        )
    };

    const authFail = (initialState, action) => {
        return updateObject(initialState, {
            error: error,
            loading: false
        });
    };

    // const authStart = (initialState, action) => {
    //     return updateObject(initialState, { error: null, loading: true });
    // };

    const authSuccess = (initialState, action) => {
        return updateObject(initialState, {
            token: action.idToken,
            userId: action.userId,
            error: null,
            loading: false
        });
    };

    const auth = (email, password, isSignup) => {
            // authStart();
            const authData = {
                email,
                password,
                returnSecureToken: true
            };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDZREZXdHSSZ2Nud2uk7FxLCxcMW4_0eUY';
            if (!isSignup) {
                url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDZREZXdHSSZ2Nud2uk7FxLCxcMW4_0eUY';
            }
            axios.post(url, authData)
                .then(response => {
                    // return console.log(response);
                    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token', response.data.idToken);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userId', response.data.localId);
                    authSuccess(response.data.idToken, response.data.localId);
                    checkAuthTimeout(response.data.expiresIn);
                })
                // .catch(err => {
                //     authFail(err.response.data.error);
                // });
        }
    
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
        setControls(() => updatedControls);
    }

    let formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = formElementsArray.map(formElement => <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}
    />
    )

    const switchAuthModeHandler = () => {
        setIsSignUp(prevState => !prevState);
    }



    return (
        <>
            <Head>
                <title>Shopify | Authentication</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={classes.Auth}>
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>

                <Button
                    clicked={switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {isSignup ? 'SIGN UP' : 'SIGN IN'}
                </Button>

                {/* <div>
                    <Link href='/'>Home</Link>
                </div> */}
            </div>
        </>
    )
}

export default Authentication;