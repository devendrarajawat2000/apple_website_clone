import React from "react";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dob: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: "",
            successMessage: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, dob, email, password, confirmPassword } = this.state;

        if (!name || !dob || !email || !password || !confirmPassword) {
            this.setState({ errorMessage: "Please fill out all fields.", successMessage: "" });
            return;
        }

        if (password !== confirmPassword) {
            this.setState({ errorMessage: "Passwords do not match.", successMessage: "" });
            return;
        }

        this.setState({ errorMessage: "", successMessage: "Signup successful!" });
    };

    render() {

        const { name, dob, email, password, confirmPassword, errorMessage, successMessage } = this.state;

        return (
            <>
                <div className="flex  bg-blue-50 h-[600px] mt-4 ml-4 ">
                    <div className="flex">
                        <div className="bg-blue-50 w-[35%] p-[40px]">
                            <h4 className="text-gray-600 text-3xl font-semibold">Create Your Apple ID</h4>
                            <h5 className="text-blue-500 text-[1.1rem] mt-[40px] justify-center ">One Apple ID is all you need to access all Apple services.
                            </h5>
                            <div className="mt-8">
                                <img className="w-[30rem]" src="https://i.pinimg.com/736x/bb/e1/2d/bbe12d0fca38e2f7a59ae42d497fab68.jpg" />
                            </div>
                        </div>
                        <div className="bg-white w-[60%] p-4" >
                            <form onSubmit={this.handleSubmit}>
                                <div className="border h-14 mt-4 ml-[2rem] ">
                                    <input className="p-2 w-[100%] h-[100%] " type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter Name " />
                                </div>
                                <div className="border h-14 mt-4 ml-[2rem] ">
                                    <input className="p-2 w-[100%] h-[100%] " type="text" name="dob" value={dob} onChange={this.handleChange} placeholder="Date of birth " />
                                </div>
                                <div className="border h-14 mt-4 ml-[2rem] ">
                                    <input className="p-2 w-[100%] h-[100%] " type="email" name="email" value={email} onChange={this.handleChange} placeholder="Enter Email " />
                                </div>
                                <div className="border h-14 mt-4 ml-[2rem] ">
                                    <input className="p-2 w-[100%] h-[100%] " type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password " />
                                </div>
                                <div className="border h-14 mt-4 ml-[2rem] ">
                                    <input className="p-2 w-[100%] h-[100%] " type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder="confirm password " />
                                </div>
                                {errorMessage && (
                                    <div className="mt-[25px] ml-[2rem] text-red-500">{errorMessage}</div>
                                )}
                                {successMessage && (
                                    <div className="mt-[25px] ml-[2rem] text-green-500">{successMessage}</div>
                                )}

                                <div className="mt-[25px] ml-[6rem]">
                                    <p className="text-md font-medium">By continuing, you agree to Apple's<span className="text-blue-600 cursor-pointer">Terms of Use</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.</p>
                                </div>
                                <div>
                                    <button type="submit" className="bg-indigo-500 w-[400px] ml-[8rem] text-white h-[50px] mt-[40px] font-semibold text-[1.3rem] rounded-sm">SignUp</button>
                                </div>
                                <div className="justify-center text-center items-center mt-[20px] font-semibold">
                                    <a href="Login"><button className=" text-blue-500 w-[100%] h-[50px]" type="button">Existing User? Log in</button></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SignUp;