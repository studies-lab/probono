module.exports = mongoose => {
    const Lawer = mongoose.model(
        "lawer",
        mongoose.Schema(
            {
                email: String,
                password: String,
            },
            { timestamps: true }
        )
    );

    return Lawer;
}