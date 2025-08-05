import React,{useState, useEffect} from 'react';



const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setFormData({ name:'', email:'', password:''});
                setSubmitted(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleChange = (e) => {
        const { name, value} = e.traget;
        setFormData(prevData => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log('User Registered:', formData);
        setSubmitted(true);
    };

    return (
        <div style={StyleSheet.container}>
            <h2>Register</h2>
            {submitted && <p style={styles.success}>Registration successful</p>}
            <form onsubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="create Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Sign up</button>
            </form>
        </div>
    );
};

    const styles= {
        container: {
            maxWidth: '400px',
            margin:'50px auto',
            padding: '20px',
            border: '5px solid #ccc',
            borderRadius: '12px',
            backgroundColor: '#0d0a0aff',
            fontFamily: 'Arial',
        },
        form: {
            flexDirection: 'column',
            gap: '12px',
            width: '100%',
            maxWidth: '400px',
            padding: '30px',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            width: '100%',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '8px',
            width: '100%',
            
        },
        success: {
            color: 'green',
            fontWeight: 'bold',
        },
        div: {
            
        }
};

    export default SignUpForm;

