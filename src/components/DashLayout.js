import useAuth from '../hooks/useAuth';

const DashLayout = () => {
  const userData = useAuth();

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">{userData.username}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Follow
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-1"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.username}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Role</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.role}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{' '}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '72%' }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '89%' }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '55%' }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Backend API
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: '5px' }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '66%' }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{' '}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '72%' }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '89%' }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '55%' }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                      Backend API
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: '5px' }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '66%' }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashLayout;
