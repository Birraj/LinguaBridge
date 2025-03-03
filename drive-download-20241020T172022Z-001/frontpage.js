async function translateText(sourceLang, targetLang, sourceText) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCCaWscKh_7SvsnLgvCsLYkDPCf2XlgPlw`;

    const requestData = {
        q: sourceText,
        source: sourceLang,
        target: targetLang,
        format: "text"
    };

    console.log("Request Data:", requestData); // Log the request data

    try {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(requestData),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();
        console.log("API Response Data:", data); // Log the API response data

        if (data && data.data && data.data.translations) {
            return data.data.translations[0].translatedText; // Return the translated text
        } else {
            console.error("Translation failed:", data); // Log the error response
            return null;
        }
    } catch (error) {
        console.error("Error:", error); // Log any network errors
        alert("An error occurred while translating.");
        return null;
    }
}
