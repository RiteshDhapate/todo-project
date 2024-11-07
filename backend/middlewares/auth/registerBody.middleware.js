import { body, validationResult } from 'express-validator';

export const registerBodyMiddleware = (req, res, next) => {
    // Validate input
    Promise.all([
        body('email').isEmail().withMessage('Invalid email').run(req),
        body('name').notEmpty().withMessage('Name is required').run(req),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').run(req)
    ]).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: "Invalid body parameters." });
        }

        next(); // Proceed to the next middleware/controller if validation passes
    });
}