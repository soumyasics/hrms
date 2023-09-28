import React from 'react'

function Counter() {
  return (
    <div>
      <div class="counters">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-6 text-center">
                    <i class="ri-user-fill"></i>
                        <h2 data-toggle="counter-up">100</h2>
                        <p>Our Staffs</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                    <i class="ri-team-fill"></i>
                        <h2 data-toggle="counter-up">200</h2>
                        <p>Our Clients</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                    <i class="ri-check-fill"></i>
                        <h2 data-toggle="counter-up">300</h2>
                        <p>Completed Projects</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                    <i class="ri-bar-chart-fill"></i>
                        <h2 data-toggle="counter-up">400</h2>
                        <p>Running Projects</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
