import Input from '../../components/forms/Input';
import BadgeInput from '../../components/forms/BadgeInput';
import DateInput from '../../components/forms/DateInput';

const CreateGame = () => {
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e);
        const data = Object.fromEntries(formData);
        console.log(data);
    };
      
    return (
        <div className="container">
          <h2>Create Game</h2>
          <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
            <div className="row">
                <Input label="Title" name="title" />
            </div>

            <div className="row">
              <BadgeInput label="Other Titles" name="otherTitles" />
            </div>
    
            <div className="row">
                <BadgeInput label="Publishers" name="publishers" className="col-md-4 mb-3" />
                <BadgeInput label="Developers" name="developers" className="col-md-4 mb-3" />
                <BadgeInput label="Genres" name="genres" className="col-md-4 mb-3" />
            </div>

            <div className="row">
                <DateInput label="First Released" name="firstReleased" />
                <DateInput label="USA Release" name="usaRelease" />
                <DateInput label="Japan Release" name="japanRelease" />
                <DateInput label="Euro Released" name="euroReleased" />
            </div>
    
            <hr className="mb-4" />
            <div className="d-flex justify-content-between">
              <a className="btn btn-outline-secondary btn-sm" href="/game">
                Back
              </a>
              <button className="btn btn-primary btn-sm" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
    );
};
    
export default CreateGame;