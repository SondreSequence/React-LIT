import Translate from "../Translation/Translate"
import withAuth from "../Login/withAuth";

function TranslatePage(){
    return(<div>
        <h1>Translate Page</h1>
        <Translate/>
    </div>)
}

export default withAuth(TranslatePage);