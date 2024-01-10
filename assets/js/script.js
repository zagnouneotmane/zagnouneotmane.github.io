
function bikeSalesAnalysis(){
    window.open("https://ismailouahbi.github.io/projects/bi/BikeSales/business.html");
}


// call medium API to get the latest posts

url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ismailouahbi&api_key=rhe7wx6pccdahycqhq4d8ux8kijkjpwlccvfxvbi";


fetch(url)
            .then(response => response.json())
            .then(data => {
                // Modify the HTML
                const title = document.getElementById('article_title');
                const link = document.getElementById('article_link');
                const body = document.getElementById('article_body');

                title.innerHTML = data.items[0].title;
                link.href = data.items[0].link;

                // take only the first 200 characters from the paragraph tag
                body.innerHTML = data.items[0].description.split("<p>")[1].substring(0, 200) + "...";

                // dataContainer.innerHTML = `API Data: ${data.someProperty}`;
                console.log(data.items[0].title);
            })
            .catch(error => console.error('Error fetching data:', error));