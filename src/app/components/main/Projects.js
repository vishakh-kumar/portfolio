import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";
import grocery1 from "../../assets/groceryApp/grocery1.png";
import books1 from "../../assets/booksApp/books1.png";
import newsApp1 from "../../assets/newsApp/newsApp1.png";
import travelBlog1 from "../../assets/travelBlog/travelBlog1.png";
import beanstalk1 from "../../assets/beanstalk/beanstalk1.png";
const Projects = () => {
    return (
        <div className="projectContainer" id="projects">
            <h1 className="title" style={{ fontSize: 35 }}>
                Recent Projects
            </h1>
            <p style={{ marginBottom: 50 }}>(All Images Below Are Clickable)</p>
            <div className="projectDisplay">
                <div className="tile">
                    <p className="heading">Books App</p>
                    <div className="projectDescription">
                        <a href="https://expo.dev/@vishakhkumar/Project5?release-channel=staging">
                            <img
                                src={books1}
                                className="booksApp"
                                alt="Books 1"
                            />
                        </a>
                        <p className="desc">
                            Books App is my first mobile app made with the help
                            of React-Native. It offers authentication. With the
                            help of Google Books Api it helps you find any book
                            of your choice.
                        </p>
                    </div>
                </div>

                <div className="tile">
                    <p className="heading">Beanstalk</p>
                    <div className="projectDescription">
                        <a href="https://beanstalk-app.herokuapp.com/">
                            <img src={beanstalk1} alt="Beanstalk 1" />
                        </a>
                        <p className="desc">
                            BeanStalk is my first group project with 2 other
                            devs. Its made with frontend on React and backend on
                            Ruby. It offers authentication, cloudinary for photo
                            upload and CRUD functionality.
                        </p>
                    </div>
                </div>

                <div className="tile">
                    <p className="heading">Grocery List</p>
                    <div className="projectDescription">
                        <a
                            href="https://mystifying-kilby-d16d5d.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={grocery1} alt="Grocery List 1" />
                        </a>
                        <p className="desc">
                            Grocery List is the best grocery list tracker you
                            will ever use. It has a clean layout and with
                            authentication enabled. Your lists are private to
                            only you.
                        </p>
                    </div>
                </div>

                <div className="tile">
                    <p className="heading">Travel Blog</p>
                    <div className="projectDescription">
                        <a
                            href="https://v-travel-log.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={travelBlog1} alt="Travel Blog 1" />
                        </a>
                        <p className="desc">
                            Travel Blog is a great app to log your travel
                            history and the data is stored in the database. Its
                            an open app, hence everyone can see your posts.
                        </p>
                    </div>
                </div>

                <div className="tile">
                    <p className="heading">News App</p>
                    <div className="projectDescription">
                        <a
                            href="https://vishakh-kumar.github.io/world-news/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={newsApp1} alt="News App 1" />
                        </a>
                        <p className="desc">
                            News App is a simple app that pulls data from the
                            news API and render top 10 news according to the
                            search item.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
