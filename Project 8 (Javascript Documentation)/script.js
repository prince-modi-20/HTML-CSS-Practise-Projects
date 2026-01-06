 const copyBtn = document.querySelector(".copy-btn");
    const code = document.querySelector("#js-code");

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(code.innerText);

        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = "Copy";
        }, 2000);
    });