/**
 *! Step 1 - Define a component
 *! Step 2 - Define state & update method
 *! Step 3 - Create UI component to accept user field info
 *! Step 4 - Store that info inside the state & reset the form
 * Step 5 - Render the input array on the screen
 * Step 6 - Allow user to enter their data
 */

 import { ToastContainer, toast } from "react-toastify";
 import { useState } from "react";
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
       { ...userSelection, name: new Date().getTime() },
     ]);
     setUserSelection({ ...initialUserSelectionState });
   };
 
   console.log("InputArr : ", inputArr);
   return (
     <>
       <header>
         <div className="form-element">
           <p>Input Type</p>
           <select name="type" onChange={onInputSelectionChange}>
             <option>Select Type</option>
             <option>Text</option>
             <option>Email</option>
             <option>Password</option>
             <option>Checkbox</option>
           </select>
         </div>
         <div className="form-element">
           <p>Label</p>
           <input
             type="text"
             placeholder="Enter label"
             name="label"
             onChange={onInputSelectionChange}
           />
         </div>
         <div className="form-element">
           <p>Placeholder</p>
           <input
             onChange={onInputSelectionChange}
             type="text"
             placeholder="Enter Placeholder"
             name="placeholder"
           />
         </div>
         <div className="form-element">
           <button onClick={onAddField}>Add to screen</button>
         </div>
       </header>
       <ToastContainer theme="dark" />
     </>
   );
 };
 
 export default DynamicForm;
 