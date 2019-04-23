import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NewsRequest } from "../store/modules/news";

import NewsCard from '../components/NewsCard'



export class newsContainer extends Component {

    state = {
        open: false,
        coin: false
    };

    componentWillMount() {
        const { country, NewsRequest, category } = this.props;
        NewsRequest(country);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handelCoinChange = (e) => {
        const { country, NewsRequest } = this.props
        const { coin } = this.state
        console.log(coin)
        NewsRequest(country, !coin)

        this.setState({ coin: !coin })

    }



    render() {
        const { loading, news, category } = this.props
        const { coin, open } = this.state
        return (
            <div>
                <NewsCard
                    data={news}
                    open={open}
                    DrawerOp={this.handleDrawerOpen}
                    DrawerCl={this.handleDrawerClose}
                    CoinChange={this.handelCoinChange}
                    coin={coin}
                    category={category}
                    loading={loading}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.init.country,
    news: state.news.news,
    loading: state.news.loading,
    category: state.news.category
})

const mapDispatchToProps = {
    NewsRequest: (country, coin) => NewsRequest(country, coin)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(newsContainer)
