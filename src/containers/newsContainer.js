import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NewsRequest } from "../store/modules/news";
import { CountryCheckAscny } from "../store/modules/Init";

import NewsCard from '../components/NewsCard'



export class newsContainer extends Component {

    state = {
        open: false,
        ctaOpen: false,
        coin: false,
        category: ''
    };

    componentWillMount() {
        const { country, NewsRequest } = this.props;
        NewsRequest(country);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleCatChange = event => {
        const value = event.target.value
        const { coin } = this.state
        const { NewsRequest, country } = this.props
        this.setState({
            [event.target.name]: value,
            coin: false
        });
        if (value && !coin) {
            NewsRequest(country, coin, value)
        }
        else if (coin) {
            NewsRequest(country, !coin, value)
        }
    };

    handleCatOpen = () => {
        this.setState({ ctaOpen: true })
    }
    handleCatClose = () => {
        this.setState({ ctaOpen: false })
    }

    handelCoinChange = (e) => {
        const { country, NewsRequest } = this.props
        const { coin } = this.state
        NewsRequest(country, !coin)
        this.setState({
            coin: !coin,
            category: ''
        })
    }

    CountryChoice = () => {
        localStorage.removeItem('country')
        this.props.CountryCheckAscny()
    }


    render() {
        const { loading, news, } = this.props
        const { coin, open, category, ctaOpen } = this.state
        console.log(category)
        return (
            <div>

                <NewsCard
                    data={news}
                    open={open}
                    DrawerOp={this.handleDrawerOpen}
                    DrawerCl={this.handleDrawerClose}
                    CatOp={this.handleCatOpen}
                    CatCl={this.handleCatClose}
                    CtaChange={this.handleCatChange}
                    ctaOpen={ctaOpen}
                    CoinChange={this.handelCoinChange}
                    CountryChoice={this.CountryChoice}
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
    loading: state.news.loading
})

const mapDispatchToProps = {
    NewsRequest: (country, coin, category) => NewsRequest(country, coin, category),
    CountryCheckAscny: () => CountryCheckAscny()
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(newsContainer)
