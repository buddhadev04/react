import React from 'react';

export default function About() {
    return (
        <div className="py-5 py-md-16 bg-white">
            <div className="container text-gray-600">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-5 mb-4 mb-md-0">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h2 className="h3 h-md-4 text-dark fw-bold">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-3 text-muted">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-3 text-muted">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
