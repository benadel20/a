 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on a table row, open the modal
 document.querySelectorAll('#myTable tbody tr').forEach(item => {
     item.addEventListener('click', event => {
         modal.style.display = "block";
     })
 });

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }




 
// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
 if (!sidebarOpen) {
   sidebar.classList.add('sidebar-responsive');
   sidebarOpen = true;
 }
}

function closeSidebar() {
 if (sidebarOpen) {
   sidebar.classList.remove('sidebar-responsive');
   sidebarOpen = false;
 }
}


// BAR CHART
const barChartOptions = {
 series: [
   {
     data: [10, 8, 6, 4, 2],
   },
 ],
 chart: {
   type: 'bar',
   height: 350,
   toolbar: {
     show: false,
   },
 },
 colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
 plotOptions: {
   bar: {
     distributed: true,
     borderRadius: 4,
     horizontal: false,
     columnWidth: '40%',
   },
 },
 dataLabels: {
   enabled: false,
 },
 legend: {
   show: false,
 },
 xaxis: {
   categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
 },
 yaxis: {
   title: {
     text: 'Count',
   },
 },
};

const barChart = new ApexCharts(
 document.querySelector('#bar-chart'),
 barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
 series: [
   {
     name: 'Purchase Orders',
     data: [31, 40, 28, 51, 42, 109, 100],
   },
   {
     name: 'Sales Orders',
     data: [11, 32, 45, 32, 34, 52, 41],
   },
 ],
 chart: {
   height: 350,
   type: 'area',
   toolbar: {
     show: false,
   },
 },
 colors: ['#4f35a1', '#246dec'],
 dataLabels: {
   enabled: false,
 },
 stroke: {
   curve: 'smooth',
 },
 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
 markers: {
   size: 0,
 },
 yaxis: [
   {
     title: {
       text: 'Purchase Orders',
     },
   },
   {
     opposite: true,
     title: {
       text: 'Sales Orders',
     },
   },
 ],
 tooltip: {
   shared: true,
   intersect: false,
 },
};

const areaChart = new ApexCharts(
 document.querySelector('#area-chart'),
 areaChartOptions
);
areaChart.render();
// Add click event to toggle dropdown
document.querySelectorAll('.dropdown-toggle').forEach(item => {
 item.addEventListener('click', event => {
   event.target.nextElementSibling.classList.toggle('show');
 });
});

// Close dropdown when clicking outside
window.onclick = function(event) {
 if (!event.target.matches('.dropdown-toggle')) {
   var dropdowns = document.getElementsByClassName("dropdown-menu");
   for (var i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
}
//begin pop up window
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a table row, open the modal
document.querySelectorAll('#myTable tbody tr').forEach(item => {
   item.addEventListener('click', event => {
       modal.style.display = "block";
   })
});

// closed When the user clicks on <span> (x)
span.onclick = function() {
   modal.style.display = "none";
}

// closed when clicked outside table
window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}
//end pop up window

//filter by date a keyword begin
const searchInput = document.getElementById('searchInput');
   const datePickerInput = document.getElementById('datepicker');
   const searchResults = document.getElementById('searchResults');
   
   
   function filterResults() {
       const keyword = searchInput.value.toLowerCase();
       const selectedDate = datePickerInput.value;
       
       const filteredData = data.filter(item => {
           const titleMatch = item.title.toLowerCase().includes(keyword);
           const dateMatch = selectedDate ? item.date === selectedDate : true;
           return titleMatch && dateMatch;
       });

       displayResults(filteredData);
   }

   function displayResults(results) {
       searchResults.innerHTML = '';

       if (results.length === 0) {
           const noResultsItem = document.createElement('li');
           noResultsItem.textContent = 'No results found.';
           searchResults.appendChild(noResultsItem);
       } else {
           results.forEach(item => {
               const listItem = document.createElement('li');
               listItem.classList.add('resultItem');
               listItem.textContent = `${item.title} - ${item.date}`;
               searchResults.appendChild(listItem);
           });
       }
   }

   searchInput.addEventListener('input', filterResults);
   datePickerInput.addEventListener('change', filterResults);

   // Initialize datepicker
   flatpickr('#datepicker', {
       dateFormat: 'Y-m-d',
       onChange: filterResults,
   });

   // Initial display of all data
   displayResults(data);

   function showPopupC() {
    document.getElementById('popupC').style.display = 'block';
  }

  // Function to close the popup
  function closePopupC() {
document.getElementById('popupC').style.display = 'none';
document.getElementById('container').style.display = 'none';
}

  // Function to confirm the action
  