module.exports = mongoose => {
    const Client = mongoose.model(
        "client",
        mongoose.Schema(
            {
                cpf: int,
                password: String,
            },
            { timestamps: true }
        )
    );

    return Client;
}