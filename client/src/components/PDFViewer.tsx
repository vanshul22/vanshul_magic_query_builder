import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/page/lib/styles/index.css'; // Import the page styles

const PdfViewer: React.FC = () => {
    // const pdfUrl = '../assets/documents/Vanshul_Kesharwani_CV.pdf'; // Replace with the path to your PDF file
    const pdfUrl = '/documents/Vanshul_Kesharwani_CV.pdf';

    return (
        <div className="mx-auto w-[70%]  dark:invert">
            <div className="my-5 border-none shadow-none">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}></Worker>
                <Viewer  fileUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default PdfViewer;