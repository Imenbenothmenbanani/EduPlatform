import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseRes = await api.get(`/courses/${id}`);
        setCourse(courseRes.data);

        const reviewsRes = await api.get(`/courses/${id}/reviews`);
        setReviews(reviewsRes.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      await api.post(`/courses/${id}/enroll`);
      alert('Inscription réussie !');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'inscription");
    }
  };

  if (loading || !course) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        Chargement...
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>{course.title}</h1>
      <p style={{ fontSize: '18px', color: '#666', marginTop: '15px' }}>
        {course.description}
      </p>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
        }}
      >
        <strong>Instructeur :</strong> {course.instructor}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleEnroll}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          S'inscrire au cours
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Avis des étudiants</h2>
        {reviews.length === 0 ? (
          <p>Aucun avis pour ce cours.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              style={{
                padding: '10px',
                marginTop: '10px',
                backgroundColor: 'white',
                borderRadius: '5px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <p><strong>{review.user.name}</strong>: {review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
