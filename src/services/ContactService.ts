import axios from 'axios';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

class ContactService {
  private baseUrl = 'https://server-web-sakha-on-board-contact-u.vercel.app/api/contact/submit-contact';
  //https://server-web-sakha-on-board-contact-u-six.vercel.app/

  // Submit contact form
  async submitContactForm(contactData: ContactFormData): Promise<any> {
    try {
      console.log('Submitting contact form data:', contactData);
      
      const response = await axios.post(this.baseUrl, contactData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Contact form submission response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Detailed Contact Form Submission Error:', {
        message: (error as Error).message,
        stack: (error as Error).stack,
        errorObject: error
      });
      throw error;
    }
  }
}

export const contactService = new ContactService();
export default contactService; 