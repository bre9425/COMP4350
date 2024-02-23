import { createContext, useState } from "react"

const SignUpContext = createContext({})

export const SignUpProvider = ({ children }) => {

    const title = {
        0: 'The Basics',
        1: 'For the Algorithm',
        2: 'Configuration File',
        3: 'Images'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        email: "",
        password: "", 
        username: "",
        birthday: "",
        postalCode: "",
        genderIdentity: "",
        showUsersLookingFor: "",
        matchWith: "",
        bio: "",
        OS: [],
        progLang: [], 
        csInterests: [],
        noncsInterests: [],
        profilePhoto: ""
    })

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value === 'file'  ? e.target.files[0] : e.target.value;

        setData(prevData => {
            if (Array.isArray(prevData[name])) {
                if (prevData[name].includes(value)) {
                    return { ...prevData, [name]: prevData[name].filter(item => item !== value) };
                } else {
                    return { ...prevData, [name]: [...prevData[name], value] };
                }
            } else { 
                return {...prevData, [name]: value}; 
            }
        }); 
    }; 

    const { ...requiredInputs } = data
    //will check to make sure none of the values in data are an empty string
    const canSubmit = page === Object.keys(title).length - 1//[...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = true // Object.keys(data)
        // .slice(0, 5)
        // .map(key => data[key])
        // .every(Boolean)

    const canNextPage2 = true //Object.keys(data)
        // .slice(5, 8)
        // .map(key => data[key])
        // .every(Boolean)

    const canNextPage3 = true //Object.keys(data)


    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
        || (page === 2 && !canNextPage3)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 //&& "remove-button"

    return (
        <SignUpContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </SignUpContext.Provider>
    )
}

export default SignUpContext