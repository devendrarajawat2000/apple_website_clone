import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errorMessage: "",
            successMessage: "",
        };
    };
    handleChange = (e) => {
        this.setState({ email: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;

        if (!email) {
            this.setState({ errorMessage: "Please fill out all fields.", successMessage: "" });
            return;
        }
        this.setState({ errorMessage: "", successMessage: "Login successful!" });
    };


    render() {
        const { email, errorMessage, successMessage } = this.state;

        return (
            <>
                <div className="flex  h-[550px] mt-4 ml-4">
                    <div className="bg-blue-50 w-[30%] p-[40px]">
                        <h4 className="text-gray-700 text-3xl font-semibold">Login</h4>
                        <h5 className="text-blue-600 text-[1.1rem] mt-[40px] justify-center ">Get access to your Product, Wishlist and Recommendations</h5>
                        <div className="mt-14 ">
                            <img className=" " src="iPhone-Logo.png" />
                        </div>
                    </div>
                    <div className="bg-white w-[33%]  p-[25px] ml-[4rem]" >
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <input className=" border-none text-lg mt-5 w-[100%] h-[50px] " type="email" placeholder=" Enter Email " value={email} onChange={this.handleChange} />
                            </div>
                            {errorMessage && (
                                <div className="mt-[25px] ml-[2rem] text-red-500">{errorMessage}</div>
                            )}
                            {successMessage && (
                                <div className="mt-[25px] ml-[2rem] text-green-500">{successMessage}</div>
                            )}
                            <div className=" border-b-[1.5px] "></div>
                            <div className="mt-[60px] text-center  ">
                                <p className="text-md font-medium">By continuing, you agree to Apple's <span className="text-blue-600 cursor-pointer">Terms of Use</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.</p>
                            </div>
                            <div className="">
                                <button type="submit" className="bg-indigo-500  sm:w-[100px] md:w-[250px] ml-6  text-white h-[50px] mt-[40px] font-semibold text-[1.3rem] rounded-sm lg:w-[400px]">Login</button>
                            </div>
                            <div className="justify-center text-center items-center mt-[150px] font-semibold">
                                <a href="./SignUp" className="text-[1rem] text-blue-600">Do not have an Apple ID? Create yours now.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;