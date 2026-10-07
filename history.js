 document.addEventListener("DOMContentLoaded", () => {

const tableBody = document.getElementById("historyTableBody");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const downloadBtn = document.getElementById("downloadHistory");
const clearBtn = document.getElementById("clearHistory");

let historyData = JSON.parse(localStorage.getItem("historyData")) || [
    {
        date: "05 Aug 2026",
        type: "HR Interview",
        score: "92%",
        status: "Completed"
    },
    {
        date: "04 Aug 2026",
        type: "Technical",
        score: "88%",
        status: "Completed"
    },
    {
        date: "03 Aug 2026",
        type: "Resume Analysis",
        score: "95%",
        status: "Completed"
    }
];

function loadTable(data) {

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `
        <tr>
            <td colspan="4" style="text-align:center;">
                No History Found
            </td>
        </tr>`;
        return;
    }

    data.forEach(item => {

        tableBody.innerHTML += `
        <tr>
            <td>${item.date}</td>
            <td>${item.type}</td>
            <td>${item.score}</td>
            <td>
                <span class="status completed">
                    ${item.status}
                </span>
            </td>
        </tr>
        `;

    });

}

loadTable(historyData);

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword = searchInput.value.toLowerCase();

        const result = historyData.filter(item =>
            item.type.toLowerCase().includes(keyword)
        );

        loadTable(result);

    });

}

if (filterSelect) {

    filterSelect.addEventListener("change", () => {

        if (filterSelect.value === "All") {

            loadTable(historyData);

            return;

        }

        const result = historyData.filter(item =>
            item.type === filterSelect.value
        );

        loadTable(result);

    });

}

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {

        let text = "Interview History\n\n";

        historyData.forEach(item => {

            text += `Date : ${item.date}\n`;
            text += `Type : ${item.type}\n`;
            text += `Score : ${item.score}\n`;
            text += `Status : ${item.status}\n`;
            text += "--------------------------\n";

        });

        const blob = new Blob([text], { type: "text/plain" });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "Interview_History.txt";

        link.click();

    });

}

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to clear history?")) {

            historyData = [];

            localStorage.removeItem("historyData");

            loadTable(historyData);

        }

    });

}

});