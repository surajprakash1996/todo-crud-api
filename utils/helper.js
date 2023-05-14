exports.sanitizeInput = (str) => {
    let text = str.replace(/(<([^>]+)>)/gi, "");
    return text.trim();
}