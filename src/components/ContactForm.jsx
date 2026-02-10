import { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from './Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        ubicacion: '',
        produccion: '',
        mensaje: ''
    });
    const [formMessage, setFormMessage] = useState({ text: '', type: '' });
    const [invalidFields, setInvalidFields] = useState(new Set());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Remove from invalid fields when user starts typing
        if (invalidFields.has(name)) {
            const newInvalidFields = new Set(invalidFields);
            newInvalidFields.delete(name);
            setInvalidFields(newInvalidFields);
        }
    };

    const validateField = (name, value) => {
        return value.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const newInvalidFields = new Set();
        Object.entries(formData).forEach(([key, value]) => {
            if (!validateField(key, value)) {
                newInvalidFields.add(key);
            }
        });

        if (newInvalidFields.size > 0) {
            setInvalidFields(newInvalidFields);
            setFormMessage({
                text: 'Por favor, completa todos los campos requeridos.',
                type: 'error'
            });
            return;
        }

        // Create WhatsApp message
        const message = `Hola! Mi nombre es ${formData.nombre}.

Provincia/Localidad: ${formData.ubicacion}
Tipo de producción: ${formData.produccion}
Email: ${formData.email}

Mensaje:
${formData.mensaje}`;

        const whatsappUrl = `https://wa.me/5493816542124?text=${encodeURIComponent(message)}`;

        // Show success message
        setFormMessage({
            text: '¡Gracias por tu consulta! Te redireccionaremos a WhatsApp.',
            type: 'success'
        });

        // Open WhatsApp and reset form
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setFormData({
                nombre: '',
                email: '',
                ubicacion: '',
                produccion: '',
                mensaje: ''
            });
            setTimeout(() => setFormMessage({ text: '', type: '' }), 5000);
        }, 1000);
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Enviar consulta</h3>

            <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre y apellido</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    className={invalidFields.has('nombre') ? styles.invalid : ''}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@email.com"
                    className={invalidFields.has('email') ? styles.invalid : ''}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="ubicacion">Provincia / Localidad</label>
                <input
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleChange}
                    placeholder="Ej: Tucumán, San Miguel"
                    className={invalidFields.has('ubicacion') ? styles.invalid : ''}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="produccion">Tipo de producción</label>
                <select
                    id="produccion"
                    name="produccion"
                    value={formData.produccion}
                    onChange={handleChange}
                    className={invalidFields.has('produccion') ? styles.invalid : ''}
                    required
                >
                    <option value="">Seleccionar...</option>
                    <option value="cria">Cría</option>
                    <option value="recria">Recría</option>
                    <option value="engorde">Engorde</option>
                    <option value="tambo">Tambo</option>
                    <option value="otros">Otros</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu producción y cómo podemos ayudarte"
                    className={invalidFields.has('mensaje') ? styles.invalid : ''}
                    required
                ></textarea>
            </div>

            {formMessage.text && (
                <div className={`${styles.formMessage} ${styles[formMessage.type]}`}>
                    {formMessage.text}
                </div>
            )}

            <Button type="submit" variant="primary" className="btn-full">
                Enviar consulta
            </Button>
        </form>
    );
}
