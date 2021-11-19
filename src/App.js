import React from "react";
import ReactDOM from 'react-dom';

function Story({ setShowStory, setStory, story }) {
  const restart = () => {
    setShowStory(false);
    setStory([]);
  };

  console.log("story: " + JSON.stringify(story));

  return (
    <div className="Story">
      <p>
        Once upon a time there was a {story.color} {story.noun1} who ate a {story.adjective} {story.noun2}.
      </p>

      <button onClick={restart}>Restart</button>
    </div>
  );
}

function MadlibForm({ createStory, setShowStory, showStory, stories }) {
  const INITIAL_STATE = { noun1: "", noun2: "", adjective: "", color: "" };
  const [formData, setFormData] = React.useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name: " + name + ", value: " + value);

    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));

    console.log("formdata: " + JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
    console.log("submit: " + JSON.stringify(formData));
    createStory(formData);
    console.log("after create story: " + JSON.stringify(stories));
    setShowStory(true);
    console.log("after set show story: " + setShowStory);
    setFormData(INITIAL_STATE);
    console.log("after reset form data");
  };

  return (
    <div className="MadlibForm">
      <form onSubmit={handleSubmit}>
        <label for="noun1">Noun 1: </label>
        <input
          required
          id="noun1"
          type="text"
          name="noun1"
          placeholder="Noun 1"
          value={formData.noun1}
          onChange={handleChange}
        />
        <p />
        <label for="noun2">Noun 2: </label>
        <input
          required
          id="noun2"
          type="text"
          name="noun2"
          placeholder="Noun 2"
          value={formData.noun2}
          onChange={handleChange}
        />
        <p />
        <label for="adjective">Adjective: </label>
        <input
          required
          id="adjective"
          type="text"
          name="adjective"
          placeholder="Adjective"
          value={formData.adjective}
          onChange={handleChange}
        />
        <p />
        <label for="color">Color: </label>
        <input
          required
          id="color"
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />
        <p />
        <button onClick={handleSubmit}>Create Story</button>
      </form>
    </div>
  );
}

function Madlib() {
  const INITIAL = [];
  const [stories, setStory] = React.useState(INITIAL);
  const [showStory, setShowStory] = React.useState(false);

  const createStory = (newStory) => {
    console.log("create new story: " + JSON.stringify(newStory));
    setStory([{ ...newStory }, ...stories]);
    console.log("after setstory");
  };

  return (
    <div className="Madlib">
      <h1>Welcome to Mad Libs !</h1>
      {showStory ? (
        <Story
          setShowStory={setShowStory}
          setStory={setStory}
          story={stories[0]}
        />
      ) : (
        <MadlibForm
          createStory={createStory}
          setShowStory={setShowStory}
          showStory={showStory}
          stories={stories}
        />
      )}
    </div>
  );
}

function App() {
  return <Madlib />;
}

export default App;
