/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo, useState } from 'react'
import { StyledMain } from './styles'
import { ButtonTemplate } from '../ButtonTemplate'
import { getShortenenUrl } from '../../services'
import { validateUrl, throtle } from '../../utils'
import { UrlRow } from './UrlRow'

export const Main = () => {
    const [urlData, setUrlData] = useState([{ err: '' }, []])
    const [copied, setCopied] = useState(-1)

    useEffect(() => {
        const UrlInLocalStorage = localStorage.getItem('urls')

        if (UrlInLocalStorage && urlData[1].length === 0) {
            setUrlData(JSON.parse(UrlInLocalStorage))
        } else if (urlData[1].length !== 0 && urlData[0].err.length === 0) {
            localStorage.setItem('urls', JSON.stringify(urlData))
        }
    }, [urlData])
    const getUrlId = id => {
        setCopied(id)
    }
    const handleDataError = (shortenUrlJSON, validUrl) => {
        setUrlData(prevUrlData => {
            let infoUrl = null
            if (validUrl === false) {
                infoUrl = { err: 'Not a valid Url' }
            } else {
                infoUrl = { err: shortenUrlJSON.error }
            }
            const updatedUrlData = [...prevUrlData[1]]
            return [infoUrl, updatedUrlData]
        })
    }

    const memoThrotleClickURLHandler = useMemo(() => {
        const handleShortenUrlClick = async event => {
            const url = event.target.url.value
            const resetInput = event.target.url
            const validUrl = validateUrl(url)

            // sin validacion returna directamente error
            if (!validUrl) return handleDataError(null, validUrl)

            const shortenUrl = await getShortenenUrl(url)
            const shortenUrlJSON = await shortenUrl.json()

            // con error retorna directamente error
            if (!shortenUrlJSON.ok) return handleDataError(shortenUrlJSON, null)

            const newUrl = {
                original: shortenUrlJSON.result.original_link,
                shorten: shortenUrlJSON.result.full_short_link2,
            }
            setUrlData(prevUrlData => {
                const infoUrl = { err: '' }
                const updatedUrlData = [...prevUrlData[1], newUrl]
                return [infoUrl, updatedUrlData]
            })
            resetInput.value = ''
            return null
        }
        return throtle(handleShortenUrlClick, 1500)
    }, [])

    return (
        <StyledMain
            aria-label="form Shortener"
            aria-level="1"
            errorVisibility={urlData[0].err.length !== 0}
        >
            <section className="form__input">
                <form onSubmit={memoThrotleClickURLHandler}>
                    <div>
                        <input
                            id="url"
                            type="text"
                            placeholder="Shorten a link here..."
                        />

                        <small>{urlData[0].err}</small>
                    </div>
                    <ButtonTemplate>
                        <button type="submit">Shorten It!</button>
                    </ButtonTemplate>
                </form>
            </section>
            {urlData[1].length !== 0 &&
                urlData[1].map((url, i) => (
                    <UrlRow
                        original={url.original}
                        shorten={url.shorten}
                        key={i}
                        id={i}
                        getUrlId={getUrlId}
                        copied={copied}
                    />
                ))}
        </StyledMain>
    )
}
