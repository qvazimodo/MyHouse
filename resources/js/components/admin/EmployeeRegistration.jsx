import React, {useEffect} from 'react';
import {useState, useRef} from "react";
import {EmployeeRegisterForm} from "./EmployeeRegisterForm";
import {CSRF_URL, EMPLOYEES_API_URL} from "../../helpers/API";
import {initialRegistrationFormFields} from "./helpers/initialRegistrationFormFields"


export const EmployeeRegistration = ({setShowRegistrationForm, messageApi, contextHolder}) => {
    const [fields, setFields] = useState(initialRegistrationFormFields);
    const [response, setResponse] = useState({});


    const key = 'updatable';

    const isInitialMount = useRef(true)

    const getCSRFToken = (url) => {
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
            .then((data) => data)
    }

    const sendForm = (e) => {
        e.preventDefault()
        console.log(fields)
        let registrationFormData = {}
        fields.forEach((elem) => {
            if (elem.errors?.length) {
                return registrationFormData.status = 'error'
            }
            let obj = {}
            obj[elem.name[0]] = elem.value
            registrationFormData = {...registrationFormData, ...obj}
        })

        if (registrationFormData.status !== 'error') {
            const CSRF_TOKEN = getCSRFToken(CSRF_URL).then((data) => {
                console.log(data)
            }).then(() =>
                fetch(EMPLOYEES_API_URL, {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            // 'X-CSRF-TOKEN1': CSRF_TOKEN,
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        },
                    body: JSON.stringify(registrationFormData)
                }).then((response) => response.json())
                    .catch((error) => console.log(error))
                    .then(data => setResponse(data)))
        }
    }

    useEffect(() => {
        if(isInitialMount.current === true){
            isInitialMount.current = false
        }else{
            openMessage()
            if(response.status ==='ok') {
                setShowRegistrationForm(false)
            }
        }
    }, [response])

    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: response.status == 'ok' ? 'success' : 'error',
                content: response.status == 'ok' ? response.message : 'Возникла ошибка!',
                duration: 2,
            });
        }, 1000);
    };

    return (
        <>
            <EmployeeRegisterForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
                sendForm={sendForm}
            />

            {/*     <Button type="primary" onClick={openMessage}>
                Open the message box
            </Button>*/}
        </>

    )
}
