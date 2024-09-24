
export default function Porfolio() {
  return (
    <div id="portfolio-body" className="portfolio-body">
      <h1>My Portfolio</h1>
      <h2>Check out these applications I have created:</h2>
      <div id="row-1" className="portfolio-items-1">
        <div id="column-1" className="portfolio-grid-1">
          <p>
            <a href="https://jlh-owner.github.io/html-seo-refactor/">HTML SEO Refactor</a>
            <figure className="image1">
              <img src="src\assets\images\search-engine-optimization.jpg" />
            </figure>
            <br></br>
            <a href="https://jlh-owner.github.io/weather-dashboard-01/">Weather Dashboard-5 Day Forecast</a>
            <figure className="image2">
              <img src="src\assets\images\weather-dashboard.png" />
            </figure>
            <br></br>
            <a href="https://jlh-owner.github.io/task-list-2024/">Task Board</a>
            <figure className="image4">
              <img src="src\assets\images\Task-Board.png" />
            </figure>
          </p>
        </div>
        <div id="column-2" className="portfolio-grid-2">
          <p>
            <a href="https://express-js-note-taker-ija4.onrender.com/">Note Taker Application</a>
            <figure className="image5">
              <img src="src\assets\images\active-buttons.png" />
            </figure>
            <br></br>
            <a href="https://jlh-owner.github.io/my-first-blog/index.html">My First Blog</a>
            <figure className="image3">
              <img src="src\assets\images\blog.png" />
            </figure>
            <br></br>
            <a href="https://text-editor-pwa-penh.onrender.com/">Text Editor with PWA</a>
            <figure className="image6">
              <img src="src\assets\images\text-editor-page.png" />
            </figure>
          </p>
        </div>
      </div>
      <div id="row-2" className="portfolio-items-2">
        <p>
          <a href="https://jlh-owner.github.io/date-night-app/">Date Night App</a>
          <br></br>
          <a href="https://drive.google.com/file/d/1FVc3RJJ1Eg4NUFVv-oxpiKzGG2UcABiJ/view">Employee Tracker with SQL</a>
          <br></br>
          <a href="https://drive.google.com/file/d/1RAo78nCHifK6elShCsQvbSUL6CdHOCfG/view">E-Commerce Site with ORM</a>
          <br></br>
          <a href="https://drive.google.com/file/d/1h9tT4pr0xIAcw56JYtzkOtic6iM8n19h/view?pli=1">Social Network API</a>
          <br></br>
        </p>
      </div>
    </div>
  );
}
