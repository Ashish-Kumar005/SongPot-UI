import React from 'react'

const PrivacyRules = () => {

    const rulesArray = [
        {
            rule : `To identify you when you login to your account`
        },
        {
            rule : `To enable us to operate the Services and provide them to you`
        },
        {
            rule : `To verify your transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed)`
        },
        {
            rule : `To analyze the Website or the other Services and information about our visitors and users, including research into our user demographics and user behaviour in order to improve our content and Services`
        },
        {
            rule : `To contact you about your account and provide customer service support, including responding to your comments and questions`
        },
        {
            rule : `To share aggregate (non-identifiable) statistics about users of the Services to prospective advertisers and partners`
        },
        {
            rule : `To keep you informed about the Services, features, surveys, newsletters, offers, surveys, newsletters, offers, contests and events we think you may find useful or which you have requested from us`
        },
        {
            rule : `To sell or market ARNSL Landing Page products and services to you`
        },
        {
            rule : `To better understand your needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users`
        }
    ]
  return (
    <ol className='order-list'>
        {
            rulesArray.map((element, index) => {
                return (
                    <li className='rules-list-item' key={index}>{element.rule}</li>
                )
            })
        }
    </ol>
  )
}

export default PrivacyRules