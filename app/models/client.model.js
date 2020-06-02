module.exports = mongoose => {
    const Client = mongoose.model(
        "client",
        mongoose.Schema(
            {
                cpf: { type: Number, required: true, unique: true},
                password: { type: String, required: true,
                    unique: true },
            },
            { timestamps: true }
        )
    );

    return Client;
}