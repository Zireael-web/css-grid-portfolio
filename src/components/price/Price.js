import './Price.scss'

function Price() {
  return (
    <section className="price">
        <div className="container">
            <h2 className="title title_16 price__title">Price List</h2>
            <div className="divider"></div>

            <div className="price__wrapper">
                <div className="price__column">
                    <div className="price__item">
                        <div className="title title_14 price__position">Landing Page</div>
                        <div className="title title_14 price__price">from $150</div>
                        <div className="price__description">A single page site for self-presentation</div>
                    </div>

                    <div className="price__item">
                        <div className="title title_14 price__position">Сorporate Website</div>
                        <div className="title title_14 price__price">from $300</div>
                        <div className="price__description">A website for your company or buisness</div>
                    </div>

                    <div className="price__item">
                        <div className="title title_14 price__position">Online Store</div>
                        <div className="title title_14 price__price">from $420</div>
                        <div className="price__description">The most necessary instrument for online sales</div>
                    </div>
                </div>

                <div className="price__column">
                    <div className="price__item">
                            <div className="title title_14 price__position">Web app</div>
                            <div className="title title_14 price__price">from $350</div>
                            <div className="price__description">Full-fledged application for web browsers</div>
                    </div>

                    <div className="price__item">
                            <div className="title title_14 price__position">iOS/Android app</div>
                            <div className="title title_14 price__price">from $400</div>
                            <div className="price__description">A smartphone app for both OS</div>
                    </div>

                    <div className="price__item">
                            <div className="title title_14 price__position">Design</div>
                            <div className="title title_14 price__price">Discussed individually</div>
                            <div className="price__description">The price depends on the compexity of the project</div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
  )
}

export default Price