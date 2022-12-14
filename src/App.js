import "./styles.css";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `JavaScript is a programming language that is used to create interactive web pages. It is one of the core technologies of the World Wide Web, and allows web pages to be dynamic and interactive. With JavaScript, web developers can create games, animations, and other interactive elements on web pages. JavaScript can also be used to control servers, databases, and other technologies, making it a powerful tool for both web developers and web users. For beginners, JavaScript can be an intimidating language to learn, but there are many resources available to help people get started. With practice and a willingness to learn, anyone can get up to speed with JavaScript and start creating amazing web applications.`, // Types 'One' // Types 'Three' without deleting 'Two'
          () => {
            console.log("Done typing!"); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        // cursor={true}
        // repeat={Infinity}
        speed="99"
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ExampleComponent />
    </div>
  );
}
