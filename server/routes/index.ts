export default defineEventHandler(async () => {
  return `
  <body>
    <script>
        async function GetData() {
          const data = await fetch('/api/test', {
            method: 'POST',
          })
          const response = await data.json()
          console.log(response)
        }
    </script>
        <button id='getData' onclick="GetData()">Get Data</button>
</body>
  `;
});

