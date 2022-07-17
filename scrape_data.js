function isNextJobIdAvailable() {
    return currentJobCount < document.querySelectorAll(".job-card-container").length - 1
}

function getCurrentJobDetails() {
    return {
        jobId: document.querySelectorAll(".job-card-container")[currentJobCount].dataset.jobId,
        jobTitle: document.querySelector(".jobs-unified-top-card__job-title")?.textContent.replaceAll("\n", "").trim(),
        jobType: document.querySelector(".jobs-unified-top-card__job-insight")?.textContent.replaceAll("\n", " ").trim(),
        companyEmployeeCount: document.querySelector(".jobs-unified-top-card__job-insight")?.nextElementSibling?.textContent.replaceAll("\n", " ").trim(),
        companyTitle: document.querySelector(".jobs-unified-top-card__company-name>a")?.textContent.replaceAll("\n", "").trim(),
        companyLocation: document.querySelector(".jobs-unified-top-card__company-name")?.nextElementSibling?.textContent.replaceAll("\n", "").trim(),
        postedDate: document.querySelector(".jobs-unified-top-card__posted-date")?.textContent.replaceAll("\n", "").trim(),
        applicatons: document.querySelector(".jobs-unified-top-card__posted-date")?.nextElementSibling?.textContent.replaceAll("\n", "").trim(),
        jobDescription: document.querySelector(".jobs-description__container")?.textContent.replaceAll("\n", " ").trim(),
    }
}

function fetchNextObjectDetails() {
    document.querySelectorAll(".job-card-container")[++currentJobCount].click()
}

function gotoNextPage() {
    currentJobCount = 0
    document.querySelector(".artdeco-pagination__indicator.artdeco-pagination__indicator--number.active").nextElementSibling.children[0].children[0].click()
}

function isNextPageAvailable() {
    return !!document.querySelector(".artdeco-pagination__indicator.artdeco-pagination__indicator--number.active").nextElementSibling

}

function next() {
    jobsDetail.push(getCurrentJobDetails())
    if (!isNextJobIdAvailable())
        if (!isNextPageAvailable())
            window.clearInterval(interval)
        else
            gotoNextPage()
    else
        fetchNextObjectDetails()
    console.log(jobsDetail)

    clearInterval(interval);
    intervalCounter = nextInterval();
    interval = setInterval(next, intervalCounter);
}

function nextInterval() {
    return Math.floor((Math.random() * 500) + 1000)
}




function start(){
    interval = setInterval(next, intervalCounter);
}

function pause(){
    clearInterval(interval);
}


jobsDetail = []
currentJobCount = 0
intervalCounter = 1000;
var interval

start()
