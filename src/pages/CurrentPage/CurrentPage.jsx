import React, {useEffect, useState} from 'react';
import {getCurrent} from "../../requests/current";
import {numberBanks} from "../../constans/numberBanks";
import {currents} from "../../constans/currents";
import {Link} from "react-router-dom";
import {filterByNumber} from "../../filters/filterByNumber";
import {sortByCurrent} from "../../filters/sortByCurrent";
import './CurrentPage.css'

const CurrentPage = () => {

    const [bankList, setBankList] = useState([])
    const [fullList, setFullList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sort, setSort] = useState(true)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const response = await getCurrent()
                setBankList(response.data)
                setFullList(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])

    return (
        <div>
            {   isLoading ?
                    <h1>
                        Loading...
                    </h1>
                    :
                    <div>
                        <div className="current-filters">
                            {numberBanks.map((item, idx) => {
                                return (
                                    <input
                                        key={idx}
                                        type="button"
                                        value={item.value}
                                        className='current-filter-buttons'
                                        onClick={() => filterByNumber(item.number, fullList, setBankList)}
                                    />
                                )
                            })}
                        <Link to='/'>
                            <input
                                type="button"
                                value='На главную'
                                className='current-filter-buttons'
                            />
                        </Link>
                        </div>
                        <div style={{border: '1px solid white'}} className="current-list">
                            <div className='current-wrap'>№</div>
                            <div className='current-wrap'>Название</div>
                            {currents.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className='current-wrap current-click'
                                        onClick={() => sortByCurrent(item.value, sort, setSort, bankList, setBankList)}
                                    >
                                        {item.title}
                                    </div>
                                )
                            })}

                        </div>
                        {bankList.map((item, idx) => {
                            return (
                                    <div
                                        key={idx}
                                        className='current-list'
                                    >
                                        <div className="current-results">
                                            {idx + 1}
                                        </div>
                                        <div className='current-title'>
                                            {item.title}
                                        </div>
                                        <div className='current-results'>
                                            {item.rates.length > 0 && (
                                                <span key={0}>
                                                {item.rates[0].buy_usd}
                                             </span>
                                            )}
                                        </div>
                                        <div className='current-results'>
                                            {item.rates.length > 0 && (
                                                <span key={0}>
                                                {item.rates[0].buy_eur}
                                             </span>
                                            )}
                                        </div>
                                        <div className='current-results'>
                                            {item.rates.length > 0 && (
                                                <span key={0}>
                                                {item.rates[0].buy_rub}
                                             </span>
                                            )}
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
            }
        </div>
    );
};

export default CurrentPage;