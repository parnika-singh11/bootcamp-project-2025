
export default function Blog() {
  return (
    <>
    <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
            <input type="submit" value="Submit"/>

        </form>
    </main>
    <footer className="footer">© 2025 Parnika's Personal Website | All Rights Reserved</footer>
    </>
  );
}
