/**
 *! Step 1 - Define a component
 *! Step 2 - Define state & update method
 *! Step 3 - Create UI component to accept user field info
 *! Step 4 - Store that info inside the state & reset the form
 * Step 5 - Render the input array on the screen
 * Step 6 - Allow user to enter their data
 */

import { ToastContainer, toast } from "react-toastify";
import { useState,React } from "react";
import "react-toastify/dist/ReactToastify.css";

const initialUserSelectionState = {
    name: null,
    placeholder: null,
    label: null,
    type: null,
};
const DynamicForm = () => {
    const [inputArr, setInputArr] = useState([]);
    const [userSelection, setUserSelection] = useState({
        ...initialUserSelectionState,
    });

    const onInputSelectionChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setUserSelection((prevState) => ({ ...prevState, [name]: value }));
    };

    const onAddField = () => {
        // Validate the data

        if (!userSelection.type) {
            toast("Please select type");

            return;
        }

        if (!userSelection.label) {
            toast("Please select label");
            return;
        }

        setInputArr((prevState) => [
            ...prevState,
            { ...userSelection, name: new Date().getTime(), value: "" },
        ]);
        setUserSelection({ ...initialUserSelectionState });
    };

    const onDynamicFormInputChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });

        setInputArr((prevState) => {
            return prevState.map((item) => {
                console.log({ item, name, value });
                if (item.name === +name) {
                    item.value = value;
                }
                return item;
            });
        });
    };

    console.log("InputArr : ", inputArr);
    return (
        <>
            <header className="d-flex flex-column gap-3">
                <div className="form-element">
                    <div>Input Type</div>
                    <select name="type" className="form-control w-50" onChange={onInputSelectionChange}>
                        <option>Select Type</option>
                        <option>Text</option>
                        <option>Email</option>
                        <option>Password</option>
                        <option>Checkbox</option>
                    </select>
                </div>
                <div className="form-element ">
                    <div>Label</div>
                    <input
                        type="text"
                        placeholder="Enter label"
                        name="label"
                        className="form-control w-50"
                        onChange={onInputSelectionChange}
                    />
                </div>
                <div className="form-element">
                    <div>Placeholder</div>
                    <input
                        onChange={onInputSelectionChange}
                        type="text"
                        placeholder="Enter Placeholder"
                        className="form-control w-50"
                        name="placeholder"
                    />
                </div>
                <div className="form-element">
                    <button onClick={onAddField}>Add to screen</button>
                </div>
            </header>
            <section>
                <h1>My Fields</h1>
                <div>
                    {inputArr.map((item) => {
                        return (
                            <div key={item.name} className="">
                                <div>{item.label}</div>
                                <input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    className="form-control w-50"
                                    value={item.value}
                                    onChange={onDynamicFormInputChange}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
            <ToastContainer theme="dark" />
        </>
    );
};

export default DynamicForm;