import form from '../Model/formModel.js';

// CREATE FORM
export const Formfillup = async (req, res) => {
    try {
        const { name, email, contactNumber, message } = req.body;

        if (!name || (!email && !contactNumber) || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, message, and either email or contact number are required"
            });
        }

        const formData = await form.create({
            name,
            email,
            contactNumber,
            message,
        });

        return res.status(201).json({
            success: true,
            message: "Form submitted successfully",
            data: formData
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// GET ALL FORMS
export const getAllForm = async (req, res) => {
    try {
        const forms = await form.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: forms.length,
            data: forms
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


// delete form 
export const deleteForm = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedForm = await form.findByIdAndDelete(id);

        if (!deletedForm) {
            return res.status(404).json({
                success: false,
                message: "Form not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Form deleted successfully",
            data: deletedForm
        });

    } catch (error) {
        console.error(error);

        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid form ID"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};