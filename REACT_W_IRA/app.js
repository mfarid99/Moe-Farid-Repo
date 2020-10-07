class WebsiteVisitors extends React.Component {
    render () {
        return (
            <div className = "websiteVisitors"> 
           <h1> Website Visitors</h1>
           <h1>8.2</h1>
           </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render () {
        return (
            <div className = "sentimentAnalysis">
                <h1>Sentiment Analysis</h1>
                <h1>960</h1>
                <h1>122</h1>
                <h1>321</h1>

                
            </div>
        )
    }
}
class AverageRating extends React.Component {
    render () {
        return (
            <div className = "averageRating"> 
           <h1> Average Rating</h1>
           <h1>4.6</h1>
           </div>
        )
    }
}
class Reviews extends React.Component {
    render() {
        return (
            <div className = "reviews">
            <h1>Reviews</h1>
            <h1>1,281</h1>

            </div>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <div className = "dashboard">
            <h1>Dashboard </h1>
            <h1>Widget </h1>

            <h1>Reviews </h1>

            <h1>Customers </h1>
            <h1>Online Analysis </h1>
            <h1>Setting </h1>

            </div>

        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
            <Sidebar />
            <Reviews />
            <AverageRating/>
            <SentimentAnalysis />
            <WebsiteVisitors />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.main')
)