function checkLevel1() {
    const input = document.getElementById('pass-input').value;
    if(input === "admin123") {
        nextStep(1, 2);
    } else { alert("Access Denied: Incorrect Password"); }
}

function checkLevel2() {
    const input = document.getElementById('otp-input').value;
    if(input === "9999") {
        nextStep(2, 3);
    } else { alert("Access Denied: Invalid OTP"); }
}

function checkLevel3() {
    const input = document.getElementById('final-input').value;
    if(input === "unlock") {
        document.getElementById('step-3').classList.add('hidden');
        document.getElementById('access-granted').classList.remove('hidden');
        document.getElementById('level-text').innerText = "COMPLETE";
    } else { alert("Access Denied: Phrase Mismatch"); }
}

function nextStep(current, next) {
    document.getElementById(`step-${current}`).classList.add('hidden');
    document.getElementById(`step-${next}`).classList.remove('hidden');
    document.getElementById('level-text').innerText = next;
}
