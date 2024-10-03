// end point
GET /api/records/csv?startDate=2024-01-01&endDate=2024-01-31



// client side using axios

// URL for the API
const url = 'http://localhost:8080/api/records/csv';

// Query parameters
const params = {
  startDate: '2024-01-01',
  endDate: '2024-01-31'
};


// Auth token (typically retrieved from login or config)
  const authToken = 'your-auth-token-here'; // Replace with actual token

  try {
    // Axios GET request with Bearer token authorization
    const response = await axios.get(url, {
      params: params,
      responseType: 'blob', // Ensure the response is treated as binary (for CSV)
      headers: {
        'Authorization': `Bearer ${authToken}` // Include the Bearer token here
      }
    });


    // For browser: Trigger a file download
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'records.csv');
    document.body.appendChild(link);
    link.click(); // Trigger the download

  } catch (error) {
    // Handle errors, such as authentication failures or request issues
    console.error('Error fetching CSV data:', error);
  }
}

// Call the async function to fetch data
fetchCsvData();