import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NewsRequest } from "../store/modules/news";
import LoadingCmp from '../components/Loading'
import NewsCard from '../components/NewsCard'



export class newsContainer extends Component {

    componentWillMount() {
        const { country, NewsRequest } = this.props;
        NewsRequest(country);
    }

    render() {
        const { loading, news } = this.props
        // const newsCard = news.map((res, index) => <NewsCard key={index} data={res} />)
        return (
            <div>
                {
                    loading ?
                        <LoadingCmp />
                        :
                        <NewsCard data={news} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.init.country,
    news: state.news.news,
    loading: state.news.loading
})

const mapDispatchToProps = {
    NewsRequest: (country) => NewsRequest(country)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(newsContainer)
