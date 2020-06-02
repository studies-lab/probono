module.exports = mongoose => {
    const Lawer = mongoose.model(
        "lawer",
        mongoose.Schema(
            {
                email: { type: String, required: true, 
                    unique: true },
                password: { type: String, required: true,
                    unique: true },
            },
            { timestamps: true }
        )
    );

    return Lawer;
}