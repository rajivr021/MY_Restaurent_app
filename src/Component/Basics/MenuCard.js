import React from 'react'

const MenuCard = ({ MenuData }) => {
  return (
    <>
      <section className="main-card--container">
        {MenuData.map((curElement) => {
          return (
            <>
              <div className="card-container" key={curElement.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElement.id}</span>
                    <span className="card-author subtle">{curElement.name}</span>
                    <span className="card-title">{curElement.name}</span>
                    <span className="card-description subtle">{curElement.description}</span>
                    <div className="card-read">Read</div>
                    <img src={curElement.image} alt="image" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          )

        })}
      </section>


    </>
  )
}

export default MenuCard
