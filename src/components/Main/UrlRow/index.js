import React, { useMemo } from 'react'
import { ButtonTemplate } from '../../ButtonTemplate'
import { throtle, CopyUrl } from '../../../utils'
import { StyledCopyButton } from './styles'

export const UrlRow = ({ original, shorten, id, getUrlId, copied }) => {
  const isCopied = copied === id
  const memoThrotledCopyUrl = useMemo(() => {
    return throtle((urlShorten, idEl) => CopyUrl(urlShorten, idEl), 3000)
  }, [])
  return (
    <StyledCopyButton isCopied={isCopied}>
      <section className="form__result">
        <div className="result__url">
          <p>{original}</p>
        </div>
        <hr />
        <div className="result__btn-url">
          <p>{shorten}</p>
          <ButtonTemplate>
            <button
              type="button"
              onClick={() => {
                getUrlId(id)
                return memoThrotledCopyUrl(shorten, id)
              }}
            >
              {isCopied ? `Copied` : `Copy`}
            </button>
          </ButtonTemplate>
        </div>
      </section>
    </StyledCopyButton>
  )
}
