const getBlobFromLocation = (mediaLocation) =>
    fetch(mediaLocation).then((response) => response.blob());

const getBlobFromText = (mediaText) =>
    new Blob([mediaText], { type: 'text/plain' });

const getBlob = async ({ media, type }) => {
    if (type === 'text') return getBlobFromText(media);
    return getBlobFromLocation(media);
};

const getFormData = async (inputData) => {
    const formData = new FormData();

    const media = await getBlob(inputData);
    const data = { ...inputData, media };

    Object.keys(data).forEach((fieldName) => {
        formData.append(fieldName, data[fieldName]);
    });

    return formData;
};

const sendForm = async (inputData) => {
    const formData = await getFormData(inputData);

    const response = await fetch('http://localhost:8000/historia/', {
        method: 'POST',
        body: formData,
    });

    return response;
};

export default sendForm;