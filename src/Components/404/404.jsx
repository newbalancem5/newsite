import React, {Component} from 'react'



class ErrorPage extends Component {
    render(){
        return(
            <div className="container d-flex justify-content-center ErrorContainer">
                <p>Страница не найдена <a href="/" className="ErrorText">Вернуться обратно</a></p>
            </div>
        )
    }
}

export default ErrorPage;