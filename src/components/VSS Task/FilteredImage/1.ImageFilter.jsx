import { useState, useRef } from "react";
import * as htmlToImage from "html-to-image";

const NewFilterImage = () => {
    // Upload
    const [file, setFile] = useState();
    const photoChanged = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setFile(imageUrl);

            // Show the modal when an image is selected

        } else {
            // Handle the case where no file is selected
            console.error("No file selected.");
        }
    }



    // Photo download
    const domEl = useRef(null);
    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement('a');
        link.download = 'html-to-img.png';
        link.href = dataUrl;
        link.click();
    };

    const imageStyle = {
        filter: "grayscale(100%)"
    }

    return (
        <div className="main-image">


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default NewFilterImage;
