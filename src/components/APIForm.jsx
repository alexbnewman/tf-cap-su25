const APIForm = ({inputs, handleChange, onSubmit}) => {
    const inputsInfo = {
        url: "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        format: "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
        no_ads: "Input true or false if you would like your website screenshot to not contain any ads",
        no_cookie_banners: "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        width: "Choose the width of your screenshot (in pixels)",
        height: "Choose the height of your screenshot (in pixels)",
    };
    
  return (
    <div>
      <h2> Select Your Image Attributes: </h2>
      <form className="form-container">
        {inputs &&
            Object.entries(inputs).map(([category, value], index) => (
            <li className="form" key={index}>
                <h2>{category} </h2>
                <input
                type="text"
                name={category}
                value={value}
                placeholder="Input this attribute..."
                onChange={handleChange}
                className="textbox"
                />
                <br></br>
                <br></br>
                {/* okay so i think some original version of the lab assumed that inputs was an array, not a dict
                like it currently is.
                So like inputs = ["", "", "", ""] instead of our dictionary (see app.jsx). the way 
                we are mapping here w category/value we are good to use key indexing w/ category!! and make inputInfo a dict.

                ... as opposed to indexing into an array w/ index and worrying that array needs to have info in correct
                order.*/}
                <p> {inputsInfo[category]}</p>
            </li>
            ))}
        </form>
        <button type="submit" className="button" onClick={onSubmit}>
        Take that Pic! 🎞
        </button>
    </div>
  );
};

export default APIForm;